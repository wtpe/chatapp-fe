import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import { MagnifyingGlass, } from "phosphor-react";
import StyledInputBase from "../../components/Search/StyledBaseInput";
import { CallElement } from "../../components/CallElement";
import { MemberList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
      onClose={handleClose}
    >
      <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
      {/*  */}
      <DialogContent>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            ></StyledInputBase>
          </Search>
        </Stack>
        {/*  */}
        {MemberList.map((el)=><CallElement {...el}/>) }
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
