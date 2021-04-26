@extends('layouts.base')
@section('title', '- welcome page')
@section('content')
  <div class="flex items-center justify-center">
    <section class="mx-auto">
        <div>
            hello LARA
        </div>
        <search-dropdown />
    </section>
  </div>

    {{-- <sample-component :items="{{ json_encode($data) }}"></sample-component> --}}
    {{-- <menu-component></menu-component> --}}
@endsection
