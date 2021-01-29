import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const Menu = ({ classes }) => (
  <div className={classes.list}>
    <List>
      <ListItem component={Link} button to="/auth/perfil">
        <i className="material-icons">account_box</i>
        <ListItemText
          className={{ primary: classes.listItemText }}
          primary="Perfil"
        />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem component={Link} button to="/curso/nuevo">
        <i className="material-icons">add_box</i>
        <ListItemText
          className={{ primary: classes.listItemText }}
          primary="Nuevo curso"
        />
      </ListItem>
      <ListItem component={Link} button to="/curso/lista">
        <i className="material-icons">menu_book</i>
        <ListItemText
          className={{ primary: classes.listItemText }}
          primary="Lista de cursos"
        />
      </ListItem>
    </List>
    <Divider/>
    <List>
      <ListItem component={Link} button to="/instructor/nuevo">
        <i className="material-icons">person_add</i>
        <ListItemText
          className={{ primary: classes.listItemText }}
          primary="Nuevo instructor"
        />
      </ListItem>
      <ListItem component={Link} button to="/instructor/lista">
        <i className="material-icons">people</i>
        <ListItemText
          className={{ primary: classes.listItemText }}
          primary="Lista de instructores"
        />
      </ListItem>
    </List>
  </div>
);
