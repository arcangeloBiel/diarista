import React from 'react'
import { PageSubTitleStyled, PageTitleContainer, PageTitleStyled } from './PageTitle.style';

interface PageTitleProps {
    title: string,
    subTitle: string
}

const PageTitle :React.FC<PageTitleProps> = (props) => {
    return(
       <PageTitleContainer>
           <PageTitleStyled>{ props.title }</PageTitleStyled>
           <PageSubTitleStyled>{ props.subTitle }</PageSubTitleStyled>
           
          
       </PageTitleContainer>
           
    )
}

export default PageTitle;

