# Notes

## About Page Queries

### Tweet Collection

```sql
select topic, extract(date from created_at) as date_added
from impeachment_production.topics
order by 2,1
```

```sql
select
  min(extract(date from created_at)) as collection_start
  ,max(extract(date from created_at)) as collection_end
  ,count(distinct status_id) as status_count
  ,count(distinct user_id) as user_count

  ,count(distinct CASE WHEN retweet_status_id is not null then status_id end) as rt_count
  ,count(distinct CASE WHEN retweet_status_id is not null then user_id end) as rt_user_count
from impeachment_production.tweets

```

### Bot Classification

```sql
select count(distinct bu.bot_id) as bot_count
from impeachment_production.bots_above_80 bu
```

```sql
select
  -- bu.bot_id
  count(distinct status_id) as status_count
  ,count(distinct case when t.retweet_status_id is not null then status_id end) rt_count
from impeachment_production.bots_above_80 bu
JOIN impeachment_production.tweets t ON cast(t.user_id as int64) = bu.bot_id
```