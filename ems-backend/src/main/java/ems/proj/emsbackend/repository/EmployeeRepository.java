package ems.proj.emsbackend.repository;

import ems.proj.emsbackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;



public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
