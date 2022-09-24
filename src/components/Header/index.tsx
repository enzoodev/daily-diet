import * as S from './styles';

const Header = () => {
    return(
        <S.Container>
             <S.Content>
                 <S.Icon /> 
                 <S.ContentTitle>
                    <S.Title>
                        Daily
                    </S.Title>
                    <S.Title>
                        Diet
                    </S.Title>
                 </S.ContentTitle>
            </S.Content>
            <S.Person />
        </S.Container>
    )
}

export default Header;