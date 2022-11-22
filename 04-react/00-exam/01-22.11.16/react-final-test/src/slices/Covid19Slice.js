import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';
import axios from 'axios';

export const getCovid19Data = createAsyncThunk('Covid19Slice/getCovid19Data', async (payload, { rejectWithValue }) => {
    const params = {};

    if (payload.startDate) {
        params.gte = payload.startDate;
    console.log(`이게 왜됨?`, params)

    }

    console.log(payload.startDate)

    if (payload.endDate) {
        params.lte = payload.endDate;
    console.log(`이게 왜됨?`, params)

    }
    console.log(payload.endDate)

    let result = null;

    try {
        const response = await axios.get('/covid19', {params: params});
        result = response.data;
        console.log(result);
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const Covid19Slice = createSlice({
    name: 'Covid19Slice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    extraReducers: {
        [getCovid19Data.pending]: pending,
        [getCovid19Data.fulfilled]: fulfilled,
        [getCovid19Data.rejected]: rejected,
    },
});

export default Covid19Slice.reducer;