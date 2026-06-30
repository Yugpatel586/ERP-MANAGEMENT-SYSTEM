const { Employee } = require('../../models/employeeSchema');

async function fetchEmployee(req, res) {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id).populate('department');

        if (!employee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }

        return res.status(200).json({
            success: true,
            employee
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { fetchEmployee };
