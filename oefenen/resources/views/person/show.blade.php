@extends('layout')

@section('content')
    <h2><a href="{{ route('person.edit', $person) }}">{{$person->name}} is a {{$person->occupation}}</a></h2>
    <h3>Job description</h3>
    <p>{{$person->job_description}}</p>
@endsection