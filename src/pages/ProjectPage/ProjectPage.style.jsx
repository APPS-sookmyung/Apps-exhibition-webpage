import { Colors } from '../../theme';
import styled from '@emotion/styled';

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 116px;
`;

export const Project = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  color: ${Colors.white};
`;

export const ProjectName = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ProjectSummary = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const StyledButton = styled.button`
  background-color: ${Colors.white};
  color: black;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-right: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #333d4b;
    text-decoration: none;
  }
`;

export const Icon = styled.span`
  font-size: 30px;
`;

export const Text = styled.span`
  font-size: 18px;
  padding-left: 8px;
  vertical-align: center;
`;

export const IconTextWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DevDescription = styled.div``;

export const DevDescriptionTitle = styled.h3`
  margin: 10px 0px;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.06em;
`;

export const DevDescriptionDetail = styled.div`
  margin-top: 10px;
  line-height: 1.4;
  font-size: 20px;
  margin-bottom: 40px;
  white-space: pre-wrap; // \n을 인지하고 줄 바꿈 실행
`;

export const CircleImage = styled.div`
  margin-right: 36px;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  flex-shrink: 0; // 간격이 좁아졌을때 원의 형태가 변형되는 것을 방지
`;

export const StackImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  padding: 10px;
`;

export const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

export const CrownImage = styled.img`
  width: 40px;
  height: 30px;
  position: absolute;
  top: -15px; /* 테두리 위에 위치하도록 조정 */
  left: 50%; /* 가운데 정렬을 위해 조정 */
  transform: translateX(-50%); /* left 값의 절반만큼 이동시킴으로써 가운데 정렬 */
  z-index: 2;
`;

export const StackDescription = styled.div`
  margin-top: 18px;
  margin-bottom: 6px;
  text-align: center;
  font-size: 18px;
`;

export const MemberDescription = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${Colors.grey};
`;

export const ImageForSpace = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const CircleForSpace = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ForSpace = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const ReviewContainer = styled.div`
  margin-top: 30px;
`;

export const ReviewTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px;
  height: auto;
`;

export const ReviewCardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const ReviewCardContent = styled.span`
  line-height: 1.5;
`;

// POCHAK 이미지

export const PochakImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
