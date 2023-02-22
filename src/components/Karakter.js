// Karakter bileşeniniz buraya gelecek
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Karakter = (props) => {
  const { swChars } = props;

  const stil = {
    width: "500px",
  };
  const Skarakter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Skarakter>
      <Accordion style={stil} open={open} toggle={toggle}>
        {!swChars && <div>Yükleniyor..</div>}
        {swChars && (
          <AccordionItem>
            {" "}
            {swChars.map((item) => (
              <div className="chars">
                <AccordionHeader targetId={item}>{item.name}</AccordionHeader>
                <AccordionBody accordionId={item}>
                  <ul>
                    <li>gender:{item.gender}</li>
                    <li>Height:{item.height}</li>
                    <li>Mass:{item.mass}</li>
                    <li>BirthYear:{item.birth_year}</li>
                    <li>Eye Color:{item.eye_color}</li>
                    <li>Hair Color:{item.hair_color}</li>
                    <li>Skin Color:{item.skinColor}</li>
                    {<p>Appears in {item.films.length} films</p>}
                  </ul>
                </AccordionBody>{" "}
              </div>
            ))}
          </AccordionItem>
        )}
        <Pagination>
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" previous />
          </PaginationItem>{" "}
          {
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
          }
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
      </Accordion>
    </Skarakter>
  );
};

export default Karakter;
