function Info(name, lastName, age, email, address) {
  return `
    Name: ${(this.name = name)}
    Last Name: ${(this.lastName = lastName)}
    Age: ${(this.age = age)}
    Email: ${(this.email = email)}
    Address: ${(this.address = address)}
    `;
}

const AhmadInfo = Info("Ahmad", "Ahmadi", 23, "ahmad@gmail.com", "Khair-e-Khana 315, 19 street");
console.log(AhmadInfo);

