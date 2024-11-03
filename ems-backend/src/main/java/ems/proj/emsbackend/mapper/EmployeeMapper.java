package ems.proj.emsbackend.mapper;


import ems.proj.emsbackend.dto.EmployeeDto;
import ems.proj.emsbackend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}

