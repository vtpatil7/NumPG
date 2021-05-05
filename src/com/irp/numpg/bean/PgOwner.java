package com.irp.numpg.bean;

public class PgOwner {
	private int id;
	private String name;
	private String profilepic;
	private String owid;
	private String mobile;
	private String alt_mobile_no;
	private String email;
	private String state;
	private String city;
	private String address;
	private String pincode;
	private String locality;
	private String pancard;
	private String adhaar;
	private String password;
	private String token;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProfilepic() {
		return profilepic;
	}
	public void setProfilepic(String profilepic) {
		this.profilepic = profilepic;
	}
	public String getOwid() {
		return owid;
	}
	public void setOwid(String owid) {
		this.owid = owid;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAlt_mobile_no() {
		return alt_mobile_no;
	}
	public void setAlt_mobile_no(String alt_mobile_no) {
		this.alt_mobile_no = alt_mobile_no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public String getPancard() {
		return pancard;
	}
	public void setPancard(String pancard) {
		this.pancard = pancard;
	}
	public String getAdhaar() {
		return adhaar;
	}
	public void setAdhaar(String adhaar) {
		this.adhaar = adhaar;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public PgOwner(int id, String name, String profilepic, String owid, String mobile, String alt_mobile_no,
			String email, String state, String city, String address, String pincode, String locality, String pancard,
			String adhaar, String password, String token) {
		super();
		this.id = id;
		this.name = name;
		this.profilepic = profilepic;
		this.owid = owid;
		this.mobile = mobile;
		this.alt_mobile_no = alt_mobile_no;
		this.email = email;
		this.state = state;
		this.city = city;
		this.address = address;
		this.pincode = pincode;
		this.locality = locality;
		this.pancard = pancard;
		this.adhaar = adhaar;
		this.password = password;
		this.token = token;
	}
	public PgOwner() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
