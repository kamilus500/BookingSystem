export const Valid: (e: React.ChangeEvent<HTMLInputElement>) => boolean = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  console.log(e.target.id);
  let input: any = document.getElementById(`${[e.target.id]}`);
  console.log(input);
  if (
    e.target.id === "username" ||
    e.target.id === "lastname" ||
    e.target.id === "name" ||
    e.target.id === "lastname"
  ) {
    if (e.target.value.length > 0) {
      input.classList.remove("notValid");
      input.classList.add("valid");
      return true;
    } else {
      input.classList.remove("valid");
      input.classList.add("notValid");
      return false;
    }
  }
  if (e.target.id === "email" || e.target.id === "email2") {
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e.target.value
      )
    ) {
      input.classList.remove("notValid");
      input.classList.add("valid");
      return true;
    } else {
      input.classList.remove("valid");
      input.classList.add("notValid");
      return false;
    }
  }
  if (e.target.id === "password") {
    if (
      /^(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[0-9]{2,})(?=.*[!@#\$%\^&\*()\-+=\\\|;:'",./<>?\]\[{}`~]{2,})(?=.{8,})/.test(
        e.target.value
      )
    ) {
      input.classList.remove("notValid");
      input.classList.remove("medium");
      input.classList.add("strong");
      return true;
    } else if (
      /^(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.{8,})/.test(
        e.target.value
      )
    ) {
      input.classList.remove("notValid");
      input.classList.remove("strong");
      input.classList.add("medium");
      return true;
    } else {
      input.classList.remove("medium");
      input.classList.remove("strong");
      input.classList.add("notValid");
      return false;
    }
  } else {
    return false;
  }
};
=======


export const Valid:(e: React.ChangeEvent<HTMLInputElement>) => boolean =(e: React.ChangeEvent<HTMLInputElement>)=>{
    let input:any=document.getElementById(`${[e.target.id]}`);

    if(e.target.id==="username"||e.target.id==="lastname"||e.target.id==="name"||e.target.id==="lastname") {
        if(e.target.value.length > 0)
        {
            input.classList.remove("notValid")
            input.classList.add("valid")
            return true;
        }
        else{
            input.classList.remove("valid")
            input.classList.add("notValid")
            return false;
        }
    }
    if(e.target.id==="email"||e.target.id==="email2") {
        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value))
        {
            input.classList.remove("notValid")
            input.classList.add("valid")
            return true;
        }
        else
        {
            input.classList.remove("valid")
            input.classList.add("notValid")
            return false;
        }
    }
    if(e.target.id==="password")
    {
        if(/^(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[0-9]{2,})(?=.*[!@#\$%\^&\*()\-+=\\\|;:'",./<>?\]\[{}`~]{2,})(?=.{8,})/.test(e.target.value))
        {
            input.classList.remove("notValid")
            input.classList.remove("medium")
            input.classList.add("strong")
            return true;
        }
        else if(/^(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.{8,})/.test(e.target.value))
        {
            input.classList.remove("notValid")
            input.classList.remove("strong")
            input.classList.add("medium")
            return true
        }
        else{
            input.classList.remove("medium")
            input.classList.remove("strong")
            input.classList.add("notValid")
            return false
        }
    }
    else{
        return false
    }
}