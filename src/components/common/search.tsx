import { Box, IconButton } from "@material-ui/core"
import { CancelOutlined, SearchOutlined } from "@material-ui/icons"
import { useState } from "react"
import TextComp from "../FormItems/TextComp"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    search_box: {
      display: 'flex',
      margin: '15px 0',
    }
}));

interface ISearch {
    label?: string,
    handleSubmit: Function,
    handleClear: Function
}

const Search = ({handleSubmit, handleClear, label=""}:ISearch) => {
    const classes = useStyles();
    const [text, setText] = useState<string>("")

    const handleChange = (e:any) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        handleSubmit(text)
    }

    const handleReset = () => {
        setText("")
        handleClear()
    }

    return (
        <Box id="search-box" className={classes.search_box}>
            <TextComp name="" value={text} label={label} handleChange={handleChange} type="text" variant="outlined" />
            <IconButton onClick={handleSearch} color="primary">
                <SearchOutlined />
            </IconButton>
            {text && <IconButton onClick={handleReset} color="secondary">
                <CancelOutlined />
            </IconButton>}
        </Box>
    )
}

export default Search;

Search.defaultProps = {
    label: ''
}
