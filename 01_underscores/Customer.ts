class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value + "peng";
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value + "pups";
  }
}

const customer = new Customer("John", "Doe");

console.log(customer.firstName);
console.log(customer.lastName);
