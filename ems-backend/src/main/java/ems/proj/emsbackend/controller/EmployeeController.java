package ems.proj.emsbackend.controller;


import ems.proj.emsbackend.dto.EmployeeDto;
import ems.proj.emsbackend.entity.Employee;
import ems.proj.emsbackend.service.EmployeeService;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")

@RestController
    @RequestMapping("/api/employees")
    @AllArgsConstructor

    public class EmployeeController{
        private EmployeeService employeeService;

        @PostMapping

        //create API
        public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
            EmployeeDto savedEmployee=employeeService.createEmployee(employeeDto);
            return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
        }


        //Get API

        @GetMapping("{id}")
        public ResponseEntity<EmployeeDto>getEmployeeById(@PathVariable("id") Long employeeId){

            EmployeeDto employeeDto=employeeService.getEmployeeById((employeeId));
            return ResponseEntity.ok(employeeDto);
        }

        //Get All API

    @GetMapping
    public ResponseEntity<List<EmployeeDto>>getAllEmployees(){
            List<EmployeeDto> employees = employeeService.getAllEmployees();
            return ResponseEntity.ok(employees);

        }


        //Update
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto>updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto updatedEmployee)
    {
        EmployeeDto employeeDto=employeeService.updateEmployee(employeeId,updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }


    //Delete

    @DeleteMapping("{id}")

    public ResponseEntity<String>deleteEmployee(@PathVariable("id") Long employeeId)
    {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Deleted successfully");
    }
}


