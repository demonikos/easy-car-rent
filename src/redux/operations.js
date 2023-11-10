import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64da7dafe947d30a260b51ea.mockapi.io/';

export const fetchAllAdverts = createAsyncThunk(
    'adverts/fetchAll', async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/adverts');
            return responce.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
        finally {
        }
    }
)

export const fetchFilterByName = createAsyncThunk(
    'adverts/:id', async (name, thunkAPI) => {
        try {
            const responce = await axios.get(`/adverts/${name}`);
            return responce.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
        finally {
        }
    }
)