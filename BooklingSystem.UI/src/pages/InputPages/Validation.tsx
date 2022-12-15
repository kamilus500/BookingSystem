export const Valid: (e: React.ChangeEvent<HTMLInputElement>) => boolean = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  let input: any = document.getElementById(`${[e.target.id]}`);

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
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g.test(e.target.value)
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
