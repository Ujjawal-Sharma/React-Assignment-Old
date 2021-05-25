@extends('layouts.app')

@section('index')
    <div class="container p-3 mt-2">
    <div class="d-flex justify-content-end">
    <a href="/posts/create" class="btn btn-success">+ New</a>
    </div>
    @if ($posts) 
        @foreach ($posts as $post)
            <div class="card p-2 mt-3 bg-light posts">
                <div class="card-body">
                    <img style="width:50%" src="/storage/cover_images/{{$post->cover_image}}" class="float-left mr-2">
                    <h4 class="card-title">{{$post->title}}</h4>
                    <p class="card-text">{!!$post->body!!}</p>
                    <small>{{$post->created_at}}</small>
                    <a href="/posts/{{$post->id}}" class="stretched-link"></a>
                </div>
            </div>
        @endforeach
        {{-- {{$posts->links()}} --}}
    @else
        <h1>No posts found</h1>
    @endif
    </div>
@endsection