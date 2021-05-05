package com.irp.numpg.bean;

import java.util.Date;

public class PgDetails {
	
	private int id;
	private int pg_owner_id;
	private String name;
	private String pg_image;
	private String state;
	private String city;
	private String locality;
	private String pincode;
	private RoomType roomtype;
	private String price;
	private String no_of_rooms;
	private Date date;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPg_owner_id() {
		return pg_owner_id;
	}
	public void setPg_owner_id(int pg_owner_id) {
		this.pg_owner_id = pg_owner_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPg_image() {
		return pg_image;
	}
	public void setPg_image(String pg_image) {
		this.pg_image = pg_image;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public RoomType getRoomtype() {
		return roomtype;
	}
	public void setRoomtype(RoomType roomtype) {
		this.roomtype = roomtype;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getNo_of_rooms() {
		return no_of_rooms;
	}
	public void setNo_of_rooms(String no_of_rooms) {
		this.no_of_rooms = no_of_rooms;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public PgDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PgDetails(int id, int pg_owner_id, String name, String pg_image, String state, String city, String locality,
			String pincode, RoomType roomtype, String price, String no_of_rooms, Date date) {
		super();
		this.id = id;
		this.pg_owner_id = pg_owner_id;
		this.name = name;
		this.pg_image = pg_image;
		this.state = state;
		this.city = city;
		this.locality = locality;
		this.pincode = pincode;
		this.roomtype = roomtype;
		this.price = price;
		this.no_of_rooms = no_of_rooms;
		this.date = date;
	}
	
	

}
