import styled from "@emotion/styled";
import { DialogContent, DialogContentText } from "@mui/material";



export const ModalContentWrapper = styled(DialogContent)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 35vw;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;

  & > img {
  border-radius: 12px;
  }
`
export const ModalTextWrapper = styled(DialogContentText)`
width: 100%
`