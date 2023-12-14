import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../sevices/postAPI";
import { PostItem } from "../components/postItem";
import { PostType } from "../types";
import {
  Grid,
  Pagination,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import Button from "../components/button";
import Navbar from "../components/navbar";
import FormDialog from "../components/creatPostModal";

export const PostsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const itemsPerPage = 6;

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: api.allPosts,
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  return (
    <>
      <Navbar title="Posts">
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add New Post
        </Button>
      </Navbar>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80vh"
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error" align="center">
          Error fetching data
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {currentItems?.map((item: PostType) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <PostItem post={item} />
                </Grid>
              );
            })}
          </Grid>
          <Box display="flex" justifyContent="center" mt={3}>
            <Pagination
              count={Math.ceil(data?.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="secondary"
            />
          </Box>
          <FormDialog
            openModal={openModal}
            setOpenModal={setOpenModal}
            title="Create New Post"
          />
        </>
      )}
    </>
  );
};
