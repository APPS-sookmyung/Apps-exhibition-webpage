import * as S from './StackCard.style';
import * as MS from '../MemberCard/MemberCard.style';
import stackList from './StackList';

const StackCard = () => {
  return (
    <S.Container>
      <MS.CardContainerOriginal1>
        {stackList.map((stack, index) => (
          <S.Card key={index}>
            <S.ImgConainer style={{ position: 'relative', zIndex: 10 }} image={stack.stackImg} />
          </S.Card>
        ))}
      </MS.CardContainerOriginal1>
      <MS.CardContainerClone1>
        {stackList.map((stack, index) => (
          <S.Card key={index}>
            <S.ImgConainer style={{ position: 'relative', zIndex: 10 }} image={stack.stackImg} />
          </S.Card>
        ))}
      </MS.CardContainerClone1>
    </S.Container>
  );
};

export default StackCard;
