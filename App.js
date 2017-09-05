import React, { Component } from 'react';
import Axios from "axios"
import {StyleSheet,
  TextInput,
  Text,
  Button,
  View } from 'react-native';

  export default class Login extends Component {
    constructor() {
      super();
      this.state={usuario: '', contrasena: '',vistaRegistro: true};
    }
    render() {
      if(!this.state.vistaRegistro) {return <Registro/>} else{
        return (
          <View>
            <Text>{'\n\n\n'}</Text>
            <View><TextInput placeholder="Usuario"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(usuario) => this.setState({usuario})}
            value={this.state.usuario}
            /></View>
            <View><TextInput placeholder="Contraseña"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(contrasena) => this.setState({contrasena})}
            value={this.state.contrasena}
            /></View>
            <View><Button
            onPress= {() => {this._registrarse()}}
            title="Registrarse"
            color="#841584"
            accessibilityLabel="Registrarse"
            /></View>
          </View>
        );
      }

    }

    _registrarse(){
      this.setState({
       vistaRegistro: !this.state.vistaRegistro
     });
    }
  }

class Registro extends Component {
  constructor() {
    super();
    this.state={ciudad: '', contrasena: '',departamento: '',direccion: '',email: '',nit: '',nombre: '',telefono: '',tipo_nit: '',vistaLogin: true};
  }
  render() {
    if(!this.state.vistaLogin) {return <Login/>} else{
    return (
      <View>
        <Text>{'\n\n'}</Text>
        <View><TextInput placeholder="Ciudad"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ciudad) => this.setState({ciudad})}
        value={this.state.ciudad}
        /></View>
        <View><TextInput placeholder="Contraseña"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(contrasena) => this.setState({contrasena})}
        value={this.state.contrasena}
        /></View>
        <View><TextInput placeholder="Departamento"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(departamento) => this.setState({departamento})}
        value={this.state.departamento}
        /></View>
        <View><TextInput placeholder="Direccion"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(direccion) => this.setState({direccion})}
        value={this.state.direccion}
        /></View>
        <View><TextInput placeholder="Email"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        /></View>
        <View><TextInput placeholder="Nit"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(nit) => this.setState({nit})}
        value={this.state.nit}
        /></View>
        <View><TextInput placeholder="Nombre"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(nombre) => this.setState({nombre})}
        value={this.state.nombre}
        /></View>
        <View><TextInput placeholder="Telefono"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(telefono) => this.setState({telefono})}
        value={this.state.telefono}
        /></View>
        <View><TextInput placeholder="Tipo de Nit"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(tipo_nit) => this.setState({tipo_nit})}
        value={this.state.tipo_nit}
        /></View>
        <View><Button
        onPress= {() => {this._registrarUsuario()}}
        title="Registro"
        color="#841584"
        accessibilityLabel="Registro"
        /></View>
      </View>
    );}
  }

  _registrarUsuario(){
    var users = {
      ciudad: this.state.ciudad,
      contrasena: this.state.contrasena,
      departamento: this.state.departamento,
      direccion: this.state.direccion,
      email: this.state.email,
      nit: this.state.nit,
      nombre: this.state.nombre,
      telefono: this.state.telefono,
      tipo_nit: this.state.tipo_nit}
    Axios({
      method: 'post',
      url: 'http://192.168.0.3:4000/usuarios',
      data: {users},
      dataType: "json"
    }).then(response => {
      console.log("Hola");});  
    this.setState({
     vistaLogin: !this.state.vistaLogin
   });
  }
}
