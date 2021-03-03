@extends('layout')

@section('content')
    <h2>Edit {{$person->name}}</h2>
    <form action="POST" action="{{ route('person.update', $person) }}">
        @csrf
        @method('PUT')
        <label for="name">Name: *</label>
        <br>
        <input type="text" name="name" value="{{$person->name}}" id="name", placeholder="Carl" required>
        <label for="occupation">Occupation: *</label>
        <br>
        <input type="text" name="occupation" value="{{$person->occupation}}" id="occupation", placeholder="DJ" required>
        <label for="job_description">Job description: *</label>
        <br>
        <textarea type="text" name="job_description" id="job_description", placeholder="Job description" required>{{$person->job_description}}</textarea>
        <br><br>
        <button type="submit">Submit</button>
    </form>
    <form action="POST" action="{{route('person.destroy', $person)">
    @csrf
    @method('DELETE')
    <button type="submit">Delete</button>
    </form>
@endsection