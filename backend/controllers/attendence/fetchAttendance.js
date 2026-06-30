const { Attendance } = require('../../models/attendanceSchema');

async function fetchAttendance(req, res) {
    try {
        const { employeeId } = req.params;
        if (!employeeId) {
            return res.status(400).json({ success: false, message: 'Employee ID is required' });
        }

        // Fetch attendance records for this employee, ordered by date descending
        const records = await Attendance.find({ employee: employeeId }).sort({ date: -1 });

        return res.status(200).json({
            success: true,
            records
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { fetchAttendance };
