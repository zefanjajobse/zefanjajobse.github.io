@extends('layout')

@section('content')
    <h2>Create a new person</h2>
    <form action="POST" action="{{ route('person.store') }}">
        @csrf
        <label for="name">Name: *</label>
        <br>
        <input type="text" name="name" id="name", placeholder="Carl" required value="{{ old('name') }}">
        @error('name')
            <p>big oof</p>
        @enderror
        <label for="occupation">Occupation: *</label>
        <br>
        <input type="text" name="occupation" id="occupation", placeholder="DJ" required>
        <label for="job_description">Job description: *</label>
        <br>
        <textarea type="text" name="job_description" id="job_description", placeholder="Job description" required></textarea>
        <br><br>
        <button type="submit">Submit</button>
    </form>
@endsection