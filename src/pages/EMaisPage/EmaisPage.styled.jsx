import styled from "styled-components";

export const Container = styled.div`
  font-family: "Arial", sans-serif;
  color: #eafaf1;
  padding: 20px;
  
  
`;


export const Section = styled.section`
  margin: 50px 0;
  /* margin-bottom: 40px; */
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #4be381;
`;

export const Steps = styled.ol`
  list-style: decimal;
  padding-left: 20px;
`;

export const Step = styled.li`
  margin-bottom: 10px;
`;

export const Materials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* justify-content: center; */
`;

export const Material = styled.div`
  background-color: #00493f;
  padding: 15px;
  border-radius: 8px;
  width: 400px;
  text-align: center;

  h3 {
    color: #4be381;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
  }
`;

export const Note = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #8ae1b9;
`;

export const List = styled.ul`
  padding-left: 20px;

  li {
    margin-bottom: 10px;
  }
`;

export const DivButton = styled.div`
  text-align: center;
  margin-top: 30px;
  padding: 20px 0;
 
`;

export const ActionButton = styled.button`
  background-color: #00a87e;
  color: #fff;
  border: none;
  font-size: larger;
  padding: 20px 70px;
  margin:20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #007a5a;
  }
`;