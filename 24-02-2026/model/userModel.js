const mongoose = require('mongoose')
const validator = require('validator')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name must be required.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'The email must be required.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please provide valid email']
    },
    photo: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'guide', 'lead-guide', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'please Provide the password'],
        minlength: 8,
        select: false
    },

    passwordChangedAt: {
        type: Date
    },
    passwordConfirm: {
        type: String,
        required: [true, 'please Provide the password'],
        minlength: 8,
        validate: {
            validator: function (el) {
                return el === this.password;
            }
        }
    },
    passwordResetToken: String,
    passwordResetExpire: Date

})

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
})

userSchema.methods.correctPassword = async function (candidatesPassword, userPassword) {
    return await bcrypt.compare(candidatesPassword, userPassword)
}
userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changeTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return JWTTimestamp < changeTimestamp;
    }
    return false;

}
userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    console.log({ resetToken }, this.passwordResetToken)
    this.passwordResetExpire = Date.now() + 10 * 60 * 1000;
    return resetToken;
}

const User = mongoose.model('User', userSchema);

module.exports = User