import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Col } from "react-bootstrap";
import Fuse from "fuse.js";
import "./Sidebar.scss";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [latestVersion, setLatestVersion] = useState("Loading...");
  useEffect(() => {
    fetchLatestVersion();
  }, []);
  const fetchLatestVersion = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/AssembleProgramming/AssembleScript/releases/latest",
        {
          headers: {
            Authorization: "Bearer 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",
          },
        }
      );
      const data = await response.json();
      setLatestVersion({
        version: data.tag_name,
        releaseDate: new Date(data.published_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
    } catch (error) {
      console.log("Error fetching latest version:", error);
      setLatestVersion({ version: "N/A", releaseDate: "N/A" });
    }
  };
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const sections = [
    { name: "Getting Started With AssembleScript", href: "/docs/latest" },
    { name: "Keywords in AssembleScript", href: "/docs/keywords" },
    { name: "Comments in AssembleScript", href: "/docs/comments" },
    { name: "Variables in AssembleScript", href: "/docs/variables" },
    { name: "Print Statement in AssembleScript", href: "/docs/print" },
    { name: "Switch-Case in AssembleScript", href: "/docs/switch" },
    { name: "Conditionals in AssembleScript", href: "/docs/conditionals" },
    { name: "Loops in AssembleScript", href: "/docs/loops" },
    { name: "Arrays in AssembleScript", href: "/docs/arrays" },
    { name: "Datatypes in AssembleScript", href: "/docs/datatypes" },
    { name: "Operators in AssembleScript", href: "/docs/operators" },
    {
      name: " Builtin Methods in AssembleScript",
      href: "/docs/builtinmethods",
    },
  ];

  const options = {
    keys: ["name"],
    includeScore: true,
    threshold: 0.3,
  };

  const fuse = new Fuse(sections, options);
  const searchResults = searchValue
    ? fuse.search(searchValue).map((result) => result.item)
    : sections;

  const highlightKeyword = (name) => {
    if (searchValue) {
      const regex = new RegExp(`(${searchValue})`, "gi");
      return name.replace(
        regex,
        '<mark style="background-color: #b9aaffb0">$1</mark>'
      );
    }
    return name;
  };

  return (
    <Navbar expand="md" variant="light" className="sidebar">
      <Navbar.Brand href="#index" className="d-md-none index-div">
        Index
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="sidebar-nav" />
      <Navbar.Collapse id="sidebar-nav">
        <Col className="main-sidebar">
          <div className="mb-3">
            <div id="latest-version">
              <span style={{ fontWeight: "bold", color: "#4b32c3" }}>
                Latest Version:{" "}
              </span>
              <span>
                {latestVersion.version} {latestVersion.releaseDate}
              </span>
            </div>
          </div>

          <div className="mb-3">
            <Form>
              <FormControl
                id="searchbar"
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={handleSearch}
              />
            </Form>
          </div>

          <Nav activeKey={location.pathname} className="flex-column">
            {searchResults.map((section, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  href={section.href}
                  dangerouslySetInnerHTML={{
                    __html: highlightKeyword(section.name),
                  }}
                />
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
