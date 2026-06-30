const { Leave } = require('../../models/leaveSchema');

async function updateLeaveStatus(req, res) {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status || !['approved', 'rejected'].includes(status)) {
            return res.status(400).json({ success: false, message: 'Invalid status. Must be approved or rejected.' });
        }

        const leave = await Leave.findByIdAndUpdate(
            id,
            { status, reviewedAt: new Date() },
            { new: true }
        );

        if (!leave) {
            return res.status(404).json({ success: false, message: 'Leave request not found' });
        }

        return res.status(200).json({
            success: true,
            message: `Leave status updated to ${status}`,
            leave
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { updateLeaveStatus };
