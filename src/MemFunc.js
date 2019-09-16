import React from "react";
// import ReactDOM from "react-dom";
import { Memory, USBMemory, NetMemory } from "./components/elements/Memory";

export function constructMem() {
  var memArr = [];
  var memLen = 15;
  for (var i = 0; i < memLen; i++) {
    if (i === 13) {
      memArr.push(
        <USBMemory
          selected={false}
          id={i}
          content={"USBMemory"}
          contentType={"letters"}
        />
      );
    } else if (i === 14) {
      memArr.push(
        <NetMemory
          selected={false}
          id={i}
          content={"NetMemory"}
          contentType={"letters"}
        />
      );
    } else {
      memArr.push(
        <Memory
          selected={i === 0 ? true : false}
          id={i}
          content={"Memory"}
          contentType={"letters"}
        />
      );
    }
  }
  return memArr;
}

// map memory block object to react jsx
export function memObjToSymbol(mem) {
  var type = mem.type;
  switch (type) {
    case "Memory":
      return (
        <Memory
          selected={mem.selected}
          id={mem.id}
          content={mem.content}
          contentType={mem.contentType}
        />
      );
    case "NetMemory":
      return (
        <NetMemory
          selected={mem.selected}
          id={mem.id}
          content={mem.content}
          contentType={mem.contentType}
        />
      );
    case "USBMemory":
      return (
        <USBMemory
          selected={mem.selected}
          id={mem.id}
          content={mem.content}
          contentType={mem.contentType}
        />
      );
    default:
      break;
  }
}

export function updateMem(id, mem) {
  this.memArr[id] = mem;
}

export function updateContentType(id, memObj) {
  // console.log("Before Update: ", this.memArr[id].props);
  var newMem = this.memObjToSymbol(memObj);
  this.updateMem(id, newMem);
  // console.log("Afte update: ", this.memArr[id].props);
}

export function moveMem(oldMemObj, newMemObj, direction) {
  var currId = oldMemObj.id;
  if (
    (currId === 0 && direction === "left") ||
    (currId === 14 && direction === "right")
  ) {
    alert("Invalide Move command!");
  } else {
    var oldMem = this.memObjToSymbol(oldMemObj);
    var newMem = this.memObjToSymbol(newMemObj);
    this.updateMem(oldMemObj.getId(), oldMem);
    this.updateMem(newMemObj.getId(), newMem);
  }
  console.log(this.memArr);
}
