@extends('layout')

@section('content')
<h2>Index of people</h2>
<ul>
    @foreach($people as $person)
        <li><a href="{{ route('person.show', $person) }}">{{ $person->name }} is a {{ $person->occupation }}</a></li>
    @endforeach
</ul>
<a href="{{ route('person.create') }}">create</a>
@endsection