import Box from "./Box";
import Button from "./Button";
import Typography from "./Typography";

interface PaginationProps {
  handlePreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  bg?: string;
}
const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePreviousPage,
  bg = "gray",
}: PaginationProps) => {
  return (
    <Box
      display="flex"
      justifyContent="end"
      alignItems="center"
      bg={bg}
      variant="gap"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
      p={3}
    >
      <Button
        variant="secondary"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <Typography variant="normal">
        Current:&nbsp; {currentPage} / Total:&nbsp; {totalPages}
      </Typography>
      <Button
        variant="secondary"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </Box>
  );
};
export default Pagination;
