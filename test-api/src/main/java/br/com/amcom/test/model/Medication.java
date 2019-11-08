package br.com.amcom.test.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.TableGenerator;

@Entity
public class Medication {
	
	@Id
	@GeneratedValue(generator="sqlite")
	@TableGenerator(name="sqlite", table="sqlite_sequence", pkColumnName="name", valueColumnName="seq", pkColumnValue="medication")
	private Long id;
	private String name;
	private double dosage;
	private String unitMeasurement;
	private int initialAmount;
	private int amountQuarter1;
	private double priceQuarter1;
	private int amountQuarter2;
	private double priceQuarter2;
	private int amountQuarter3;
	private double priceQuarter3;
	private int amountQuarter4;
	private double priceQuarter4;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getDosage() {
		return dosage;
	}
	public void setDosage(double dosage) {
		this.dosage = dosage;
	}
	public String getUnitMeasurement() {
		return unitMeasurement;
	}
	public void setUnitMeasurement(String unitMeasurement) {
		this.unitMeasurement = unitMeasurement;
	}
	public int getInitialAmount() {
		return initialAmount;
	}
	public void setInitialAmount(int initialAmount) {
		this.initialAmount = initialAmount;
	}
	
	public int getCurrentAmount() {
		int totalAmount = (amountQuarter1 + amountQuarter2 + amountQuarter3 + amountQuarter4);
		return totalAmount > 0 ? totalAmount / 4 : 0;
	}

	public double getAveragePrice() {		
		double totalPrice = (priceQuarter1 / amountQuarter1) + (priceQuarter2 / amountQuarter2) + (priceQuarter3 / amountQuarter3) + (priceQuarter4 / amountQuarter4);
		return totalPrice > 0 ? totalPrice / 4 : 0;		
	}

	public int getAmountQuarter1() {
		return amountQuarter1;
	}
	public void setAmountQuarter1(int amountQuarter1) {
		this.amountQuarter1 = amountQuarter1;
	}
	public double getPriceQuarter1() {
		return priceQuarter1;
	}
	public void setPriceQuarter1(double priceQuarter1) {
		this.priceQuarter1 = priceQuarter1;
	}
	public int getAmountQuarter2() {
		return amountQuarter2;
	}
	public void setAmountQuarter2(int amountQuarter2) {
		this.amountQuarter2 = amountQuarter2;
	}
	public double getPriceQuarter2() {
		return priceQuarter2;
	}
	public void setPriceQuarter2(double priceQuarter2) {
		this.priceQuarter2 = priceQuarter2;
	}
	public int getAmountQuarter3() {
		return amountQuarter3;
	}
	public void setAmountQuarter3(int amountQuarter3) {
		this.amountQuarter3 = amountQuarter3;
	}
	public double getPriceQuarter3() {
		return priceQuarter3;
	}
	public void setPriceQuarter3(double priceQuarter3) {
		this.priceQuarter3 = priceQuarter3;
	}
	public int getAmountQuarter4() {
		return amountQuarter4;
	}
	public void setAmountQuarter4(int amountQuarter4) {
		this.amountQuarter4 = amountQuarter4;
	}
	public double getPriceQuarter4() {
		return priceQuarter4;
	}
	public void setPriceQuarter4(double priceQuarter4) {
		this.priceQuarter4 = priceQuarter4;
	}

}
