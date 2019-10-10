import React from "react";
import { Memory, USBMemory, NetMemory } from "./components/elements/Memory";

/**
 * Construct memory
 */
export function constructMem() {
  var memArr = [];
  var memLen = 15;
  for (var i = 0; i < memLen; i++) {
    if (i === 13) {
      memArr.push(
        <USBMemory
          selected={false}
          id={i}
          content={""}
          contentType={"letters"}
        />
      );
    } else if (i === 14) {
      memArr.push(
        <NetMemory
          selected={false}
          id={i}
          content={""}
          contentType={"letters"}
          animated={false}
        />
      );
    } else {
      memArr.push(
        <Memory
          selected={i === 0 ? true : false}
          id={i}
          content={""}
          contentType={"letters"}
        />
      );
    }
  }
  return memArr;
}

/**
 * Map MemoryBlock object to Memory JSX in order to render
 * @param {MemoryBlock} memObj MemoryBlock object which contains information that Memory JSX needed
 */
export function mapMemObjToSymbol(memObj) {
  var type = memObj.type;
  switch (type) {
    case "Memory":
      return (
        <Memory
          selected={memObj.selected}
          id={memObj.id}
          content={memObj.content}
          contentType={memObj.contentType}
        />
      );
    case "NetMemory":
      return (
        <NetMemory
          selected={memObj.selected}
          id={memObj.id}
          content={memObj.content}
          contentType={memObj.contentType}
          animated={memObj.animated}
        />
      );
    case "USBMemory":
      return (
        <USBMemory
          selected={memObj.selected}
          id={memObj.id}
          content={memObj.content}
          contentType={memObj.contentType}
        />
      );
    default:
      break;
  }
}
