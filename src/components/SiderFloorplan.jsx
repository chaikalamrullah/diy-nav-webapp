import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import MenuItem from '@mui/material/MenuItem';

import CustomIcon from './CustomIcon';
import StyledMenu from './StyledMenu';
import FI1Svg from '../symbols/floorplan/Floorplan_Image1.svg';
import FI2Svg from '../symbols/floorplan/Floorplan_Image2.svg';
import FI3Svg from '../symbols/floorplan/Floorplan_Image3.svg';
import FI4Svg from '../symbols/floorplan/Floorplan_Image4.svg';
import FI5Svg from '../symbols/floorplan/Floorplan_Image5.svg';
import FI6Svg from '../symbols/floorplan/Floorplan_Image6.svg';
import FI7Svg from '../symbols/floorplan/Floorplan_Image7.svg';

import { addItem } from '../store/slices/canvas';
import { createIcon } from '../helpers/items';

const SiderFloorplan = () => {
  const baseImage = useSelector((state) => state.canvas.baseImage);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const addIconAndClose = useCallback((e) => {
    if (!baseImage) {
      handleClose();

      return;
    }

    dispatch(
      addItem(createIcon({
        url: e.currentTarget.firstElementChild.src,
        title: e.currentTarget.firstElementChild.alt,
      })),
    );

    handleClose();
  }, [dispatch, baseImage]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem
        button
        id="sider-floorplan-icons"
        aria-controls="sider-floorplan-list"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ListItemIcon>
          <AutoAwesomeMosaicIcon />
        </ListItemIcon>
        <ListItemText primary="Add floor plan" />
      </ListItem>
      <StyledMenu
        id="sider-floorplan-list"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'sider-floorplan-icons',
        }}
      >
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={FI1Svg} alt="Floor plan for Image 1" />Floor plan 1
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={FI2Svg} alt="Floor plan for Image 2" />Floor plan 2
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={FI3Svg} alt="Floor plan for Image 3" />Floor plan3
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={FI4Svg} alt="Floor plan for Image 4" />Floor plan 4
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={FI5Svg} alt="Floor plan for Image 5" />Floor plan 5
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={FI6Svg} alt="Floor plan for Image 6" />Floor plan 6
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={FI7Svg} alt="Floor plan for Image 7" />Floor plan 7
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default SiderFloorplan;
