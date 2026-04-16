const checkPlan = (requiredPlan) => {
    return (req, res, next) => {
        const userPlan = req.user.plan; // Assuming req.user is set after user authentication
        if (userPlan === requiredPlan) {
            return next();
        } else {
            return res.status(403).json({ message: 'Access denied' });
        }
    };
};
module.exports = checkPlan;