const { mailers } = require("../../../helper/sendEmail");
const wrapper = require("../../../helper/wrapper");

const sendEmail = async (req, res) => {
  try {
    const { email, message } = req.body;

    await mailers(email, message);

    return wrapper.success(res, "email has sended", null, 200);
  } catch (error) {
    return wrapper.error(res, "failed send email", error.message, 400);
  }
};

module.exports = { sendEmail };
