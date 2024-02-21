import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./input.js";
import { Label } from "./Label.js";

const title = new Component("h1", "body", { textContent: "Olá mundo!" });
console.log(title);
title.render();
const form = new Form("body");
const label = new Label("Nome:", form, { htmlFor: "nameImput" });
const input = new Input(form, { id: "nameImput", name: "name" });
form.render();
label.render();
form.addChildren(input);
form.addChildren(
  new Component("br"),`````
  new Component("br"),
  new Label("Data de Nascimento:", { htmlFor: "birthdayInput" }),
  new Input(form, { id: "birthdayInput", name: "birthday", type: "date" })
);

//comentario 