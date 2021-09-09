package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {	

	@Query("SELECT  new com.devsuperior.dsvendas.dto.SaleSumDTO(s.seller, SUM(s.amount))"
			+ " FROM Sale as s GROUP BY s.seller")
	List<SaleSumDTO> amountGroupedBySaller();
	

	@Query("SELECT  new com.devsuperior.dsvendas.dto.SaleSuccessDTO(s.seller, SUM(s.visited), SUM(s.deals))"
			+ " FROM Sale as s GROUP BY s.seller")
	List<SaleSuccessDTO> successGroupedBySaller();
}
