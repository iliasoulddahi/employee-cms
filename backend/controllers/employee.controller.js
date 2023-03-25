const { Op } = require('sequelize');
const { Employee,Position } = require('../models')
class EmployeeController {
    /**
     * Get All Employee with pagination & filter
     */
    static async findEmployee(req,res,next) {
        const { size, page, position, name } = req.query

        const getPagination = (page, size ) => {
            const limit = size ? +size : 10;
            const offset = page ? page * limit : 0;
            return { limit, offset };
        };
        const getPagingData = (data, page, limit) => {
            const { count: totalItems, rows: employees } = data;
            const currentPage = page ? +page : 0;
            const totalPages = Math.ceil(totalItems / limit);

            return { totalItems, employees, totalPages, currentPage };
        };

        let where;
        if(position && name){
            where = {
                PositionId: position,
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }
        }
        else if (position) {
            where = {
                PositionId: position
            }
        } else if (name) {
            where = {
                firstName:{
                    [Op.iLike]: `%${name}%`
                }
            }
        } else {
            where = null
        }
        const { limit, offset } = getPagination(page, size)
        try {
            const employee = await Employee.findAndCountAll({
                limit,
                offset,
                where,
                include: {
                    model: Position
                },
                order: [['updatedAt', 'DESC']]
            })
            res.status(200).json(
                getPagingData(employee, page, limit)
            )
        } catch (err) {
            next(err)
        }
    }
    /**
     * Get Employee By Id Response Object Employee
     */
    static async findEmployeeById(req,res,next) {
        const {id:userId} = req.params
        try {
            const employee = await Employee.findOne({
                where: {
                    id:userId
                },
                include:{
                    model:Position
                }
            })
            if(!employee){
                throw {name: 'NotFound'}
            }
            res.status(200).json(employee)
        } catch (error) {
            next(error)
        }
    }
    /**
     * Create new employee
     */
    static async createEmployee(req,res,next) {
        const { firstName, lastName, email,imgUrl, gender, dob,phone, address, position:PositionId } = req.body
        try {
            const employee = await Employee.create({ firstName, lastName, email,imgUrl, gender, dob, phone, address, PositionId, status:'inactive' })
            res.status(200).json(employee)
        } catch (error) {
            next(error)
        }
    }
    /**
     * Update Employee datas
     */
    static async updateEmployee(req,res,next) {
        const { id } = req.params
        const { firstName, lastName, email, gender, dob,phone, address } = req.body
        try {
            await Employee.update({ firstName, lastName, email, gender, dob,phone, address }, {
                where: {
                    id
                }
            })
            res.status(200).json({message:'update success'})
        } catch (error) {
            next(error)
        }
    }
    /**
     * change Employee status active | inactive
     */
    static async updateEmployeeStatus(req,res,next) {
        const { id } = req.params
        try {
            const employee = await Employee.findOne({
                where:{
                    id
                },
                attributes:[
                    'status'
                ]
            })
            let status;
            if(employee.status === 'inactive'){
                status = 'active'
            }else{
                status = 'inactive'
            }
            await Employee.update({status}, {
                where: {
                    id
                }
            })
            res.status(200).json({message:'update status success'})
        } catch (error) {
            next(error)
        }
    }
    /**
     * Delete Employee by id
     */
    static async deleteEmployee(req,res,next) {
        const { id } = req.params
        try {
            await Employee.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({message:'delete success'})
        } catch (error) {
            next(error)
        }
    }
    /**
     * Get All Positions
     */
    static async findPositions(req,res,next) {
        try {
            const position = await Position.findAll()
            res.status(200).json(position)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = EmployeeController