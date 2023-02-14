import React from "react";

/* Need to build a blank cell list when user clicks CLEAR ALL */
import { buildCellList } from "../utils";

/**
 * The ActionPanel component represents the interface for updating the Grid
 * based on any number of buttons the user might click on.
 */
const ActionPanel = (props) => {
  /**
   * Create constants for activeColor, cellList, and setCellList, reading them from the props
   */
const activeColor=(props.activeColor)
const cellList=(props.cellList)
const setCellList=(props.setCellList)
  return (
    <div className="action-panel">
      {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - passes the new cell list to setCellList

    */}
      <button onClick = {()=>{
        let resetList = buildCellList()
        setCellList(resetList)
      }}>clear all</button>
      {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over it, setting the color on each cell to activeColor
        - passes the new cell list to setCellList
    */}
      <button onClick = {()=>{
        let fillList = buildCellList()
        for(let i = 0; i<fillList.length; i++){
          fillList[i].color = activeColor
        }
          
        setCellList(fillList)
      }}>fill all</button>
      {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over the original cellList, and for each cell in it:
          - set the corresponding (by index) new cell to its color (if it has one) OR
          - set the corresponding (by index) new cell to the activeColor
    */}
      <button onClick = {()=>{
        let newList = buildCellList()
        for(let i = 0; i<newList.length; i++){
          if(cellList[i].color){
            newList[i].color = cellList[i].color
          }else{
            newList[i].color = activeColor
          }
        }
        setCellList(newList)
      }}>fill empty</button>
    </div>
  );
};

export default ActionPanel;
