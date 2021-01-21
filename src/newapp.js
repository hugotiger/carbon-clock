import React from "react";

// En share link nånstans?
export default function NewApp() {
  return (
    <>
      <header>{/* LOGO */}</header>
      {/* // Vad ska denna ha? Den kanske inte ens behöver styles? */}
      <main className="general" role="main">
        <section>
          Tabs n shit
          <h1>The label of the countdown</h1>
        </section>
        <section>
          Här har vi info om countern
          <br />
          Länk till github
          <br />
          Källhänvisning med länk IPCC-rapport (säg vad jag hämtat)
          <br />
          Hänvisning till kontaktuppgifter
        </section>
        <footer>
          DESIGNED BY A HUMAN CREATED WITH A KEYBOARD
          <br />
          Kontaktuppgifter + länk till min personliga hemsida
        </footer>
      </main>
    </>
  );
}
