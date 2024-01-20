
export function SignUpForm(){
    return (
      <div className="container mt-5 text-center">
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="username"
            type="text"
            id="username"
            placeholder="type username here"
          />
            <Input
            label="firstname"
            type="text"
            id="firstname"
            place
            holder="type first name here"
          />
             <Input
            label="lastname"
            type="text"
            id="lastname"
            place
            holder="type last name here"
          />
            <Input
            label="email"
            type="text"
            id="email"
            placeholder="type email here"
          />
          <Input
            label="password"
            type="password"
            id="password"
            placeholder="type your password..."
          />
        </div>
      </div>
    )
    }

    export default Form;