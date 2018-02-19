package org.springframework.samples.petclinic.model;

import javax.persistence.*;
import javax.validation.constraints.Digits;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.core.style.ToStringCreator;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
public class User extends Person{
	
	@Column(name = "username")
	@NotEmpty
    private String username;
	 
	@Column(name = "password")
	@Digits(fraction = 0, integer = 8)
    private String password;
	
	@Column(name = "rol")
    private String rol;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	@Override
    public String toString() {
        return new ToStringCreator(this)

            .append("id", this.getId())
            .append("new", this.isNew())
            .append("lastName", this.getLastName())
            .append("firstName", this.getFirstName())
            .append("username", this.username)
            .append("password", this.password)
            .append("rol", this.rol)
            .toString();
    }
}
