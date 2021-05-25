<div class="container">
    <a href="/posts" class="btn btn-default btn-secondary mt-3 mb-3">Go Back</a>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">{{$post->title}}</h1>
            {{-- <img style="width:100%" src="/storage/cover_images/{{$post->cover_image}}"> --}}
            <br><br>
            <div>
                {!!$post->body!!}
                <img style="width:50%" src="/storage/cover_images/{{$post->cover_image}}">
            </div>
            <hr>
            <small>Written on {{$post->created_at}}</small>
            <hr>
            <a href="/posts/{{$post->id}}/edit" class="btn btn-info">Edit</a>
            {!! Form::open(['url' => route('posts.destroy', $post->id), 'method'=> 'POST', 'class' => 'float-right']) !!}
            {{Form::hidden('_method', 'DELETE')}}
            {{Form::submit('Delete', ['class' => 'btn btn-danger']) }}
            {!! Form::close() !!}
        </div>
    </div>
</div>