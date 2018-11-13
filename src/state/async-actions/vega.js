import { vega } from "vega-embed";
import * as actions from '../actions'

const { SET_VEGA_SPECIFICATION } = actions;

export function getVegaSpecification(url) {
  
  return function (dispatch) {
    fetch(url)
      .then(response => response.json())      
      .then(json => dispatch(setSpecificationInState(json)));
  };
}

export function setSpecificationInState(specification) {    
  return {
    type: SET_VEGA_SPECIFICATION,
    specification
  };
}

export function getVegaData(view, key, url) {
  return function (dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(updateVegaData(view, key, json)))
  }
}

export function updateVegaData(view, key, data) {
  return function (dispatch) {
    if (view) {
      view.change(key, vega.changeset().insert(data).remove(view.data(key).slice())).run()
    }
  }
}

export function addSignalHandler(view, { signalName, callback }) {
  return function (dispatch) {
    view.addSignalListener(signalName, callback);
  }
}

export function removeSignalHandler(view, { signalName, callback }) {
  return function (dispatch) {
    view.removeEventListener(signalName, callback);
  }
}

export function sendSignal(view, { signalName, value }) {
  return function (dispatch) {
    view.signal(signalName, value).run();
  }
}

export function sendSignalByProperty(view, key, signalName, { name, value }) {
  return function (dispatch) {
    const record = dispatch(getDataObject(view, key, { name, value }))
    view.signal(signalName, record[0]).run();
  }
}

export function getDataObject(view, key, { name, value }) {
  return function (dispatch) {
    if (view) {
      const data = view.data(key).slice()
      const record = data.filter(item => item.locatieid == value)
      return record
    }
  }
}