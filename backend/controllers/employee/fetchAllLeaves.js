const { Leave } = require('../../models/leaveSchema');

async function fetchAllLeaves(req, res) {
    try {
        const leaves = await Leave.find()
            .populate({
                path: 'employee',
                select: 'name designation employeeCode department',
                populate: {
                    path: 'department',
                    select: 'name'
                }
            })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            leaves
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { fetchAllLeaves };
