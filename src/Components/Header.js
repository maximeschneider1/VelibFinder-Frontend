import React  from "react";
import AppBar from "@material-ui/core/AppBar";

export default function Header() {

  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
            <div className="toolbar">
                <h1>Splio Velib' Finder</h1>
                <h3>Maxime Schneider</h3>
            </div>
      </AppBar>
    </React.Fragment>
  );
}
